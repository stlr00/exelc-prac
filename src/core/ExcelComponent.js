import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emmiter = options.emmiter
    this.usubs = []
    this.prepare()
  }
  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  $emit(event, ...args) {
    this.emmiter.emit(event, ...args)
  }

  $on(event, fn) {
    const unsub = this.emmiter.subscribe(event, fn)
    this.usubs.push(unsub)
  }

  init() {
    this.initDomListeners()
  }

  destroy() {
    this.removeDomListeners()
    this.usubs.forEach(unsub => unsub())
  }

  prepare() {}
}
