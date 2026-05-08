'use strict';

class Calculadora {
  constructor() {
    this._cur       = '0';   // valor sendo exibido/editado
    this._prev      = null;  // operando anterior (number)
    this._op        = null;  // operador pendente
    this._waitNext  = false; // aguarda novo operando após operador ou =
    this._render();
  }

  // ── Entrada de dígitos ──────────────────────────────────────────────
  digit(d) {
    if (this._cur === 'Erro') return;
    if (this._waitNext) {
      this._cur = d;
      this._waitNext = false;
    } else {
      if (this._cur === '0') {
        this._cur = d;
      } else if (this._cur.replace('-', '').replace('.', '').length < 13) {
        this._cur += d;
      }
    }
    this._render();
  }

  decimal() {
    if (this._cur === 'Erro') return;
    if (this._waitNext) {
      this._cur = '0.';
      this._waitNext = false;
      this._render();
      return;
    }
    if (!this._cur.includes('.')) {
      this._cur += '.';
      this._render();
    }
  }

  // ── Operadores ──────────────────────────────────────────────────────
  setOp(op) {
    if (this._cur === 'Erro') return;

    // Se já há operador pendente e o usuário ainda não digitou o segundo
    // operando, apenas troca o operador.
    if (this._waitNext) {
      this._op = op;
      this._render();
      return;
    }

    // Operação encadeada: calcular antes de aplicar novo operador.
    if (this._op !== null) {
      const result = this._compute(this._prev, parseFloat(this._cur), this._op);
      this._cur = this._fmt(result);
      if (this._cur === 'Erro') {
        this._op = null;
        this._prev = null;
        this._waitNext = false;
        this._render();
        return;
      }
    }

    this._prev = parseFloat(this._cur);
    this._op = op;
    this._waitNext = true;
    this._render();
  }

  equals() {
    if (!this._op || this._waitNext || this._cur === 'Erro') return;
    const result = this._compute(this._prev, parseFloat(this._cur), this._op);
    this._cur = this._fmt(result);
    this._prev = null;
    this._op = null;
    this._waitNext = false;
    this._render();
  }

  // ── Funções especiais ───────────────────────────────────────────────
  percentage() {
    if (this._cur === 'Erro') return;
    const v = parseFloat(this._cur);
    // Se há operação pendente, calcula % do operando anterior; senão, divide por 100.
    this._cur = this._fmt(
      (this._prev !== null && this._op) ? (this._prev * v / 100) : (v / 100)
    );
    this._waitNext = false;
    this._render();
  }

  toggleSign() {
    if (this._cur === 'Erro' || this._cur === '0') return;
    this._cur = this._cur.startsWith('-') ? this._cur.slice(1) : '-' + this._cur;
    this._render();
  }

  backspace() {
    if (this._cur === 'Erro') {
      this._cur = '0';
      this._render();
      return;
    }
    if (this._waitNext) return;
    this._cur = this._cur.length > 1 ? this._cur.slice(0, -1) : '0';
    this._render();
  }

  clear() {
    this._cur = '0';
    this._prev = null;
    this._op = null;
    this._waitNext = false;
    this._render();
  }

  // ── Internos ────────────────────────────────────────────────────────
  _compute(a, b, op) {
    switch (op) {
      case '+': return a + b;
      case '−': return a - b;
      case '×': return a * b;
      case '÷': return b === 0 ? NaN : a / b;
      default:  return b;
    }
  }

  _fmt(n) {
    if (!isFinite(n) || isNaN(n)) return 'Erro';
    // Remove artefatos de ponto flutuante (ex: 0.1+0.2 → 0.3)
    return parseFloat(n.toPrecision(10)).toString();
  }

  _fmtPrev(n) {
    const s = String(n);
    return s.length > 9 ? parseFloat(n.toPrecision(6)).toString() : s;
  }

  _render() {
    const valEl = document.getElementById('display-value');
    const opEl  = document.getElementById('display-op');
    if (!valEl || !opEl) return;

    // Notação científica se o número for muito longo no display.
    let display = this._cur;
    const digits = display.replace('-', '').replace('.', '').length;
    if (display !== 'Erro' && digits > 10) {
      display = parseFloat(display).toExponential(3);
    }

    // Ajuste dinâmico do tamanho da fonte para números longos.
    const len = display.length;
    valEl.style.fontSize =
      len > 11 ? '1.65rem' :
      len > 8  ? '2.1rem'  :
      len > 6  ? '2.5rem'  : '';

    valEl.textContent = display;

    // Linha de contexto acima do valor.
    opEl.textContent = (this._prev !== null && this._op)
      ? `${this._fmtPrev(this._prev)} ${this._op}`
      : ' ';

    // Destaca o botão do operador ativo.
    const opIds = { '+': 'op-add', '−': 'op-sub', '×': 'op-mul', '÷': 'op-div' };
    Object.values(opIds).forEach(id => document.getElementById(id)?.classList.remove('active'));
    if (this._op && this._waitNext) {
      document.getElementById(opIds[this._op])?.classList.add('active');
    }
  }
}

// ── Instância global ────────────────────────────────────────────────────
const calc = new Calculadora();

// ── Suporte a teclado ───────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;

  switch (e.key) {
    case '0': case '1': case '2': case '3': case '4':
    case '5': case '6': case '7': case '8': case '9':
      calc.digit(e.key); break;
    case '.': case ',':
      calc.decimal(); break;
    case '+':
      calc.setOp('+'); break;
    case '-':
      calc.setOp('−'); break;
    case '*':
      calc.setOp('×'); break;
    case '/':
      e.preventDefault();
      calc.setOp('÷'); break;
    case 'Enter': case '=':
      calc.equals(); break;
    case 'Escape': case 'Delete':
      calc.clear(); break;
    case 'Backspace':
      calc.backspace(); break;
    case '%':
      calc.percentage(); break;
  }
});
