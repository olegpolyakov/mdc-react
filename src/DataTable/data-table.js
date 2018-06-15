class MaterialDataTable {
    static cssClasses_ = {
        DATA_TABLE: 'mdl-data-table',
        SELECTABLE: 'mdl-data-table--selectable',
        SELECT_ELEMENT: 'mdl-data-table__select',
        IS_SELECTED: 'is-selected',
        IS_UPGRADED: 'is-upgraded'
    };

    constructor(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    }
    /**
       * Generates and returns a function that toggles the selection state of a
       * single row (or multiple rows).
       *
       * @param {Element} checkbox Checkbox that toggles the selection state.
       * @param {Element} row Row to toggle when checkbox changes.
       * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
       * @private
       */
    selectRow_(checkbox, row, opt_rows) {
        if (row) {
            return function () {
                if (checkbox.checked) {
                    row.classList.add(this.CssClasses_.IS_SELECTED);
                }
                else {
                    row.classList.remove(this.CssClasses_.IS_SELECTED);
                    if (this.headerCheckbox['MaterialCheckbox'].inputElement_.checked) {
                        this.headerCheckbox['MaterialCheckbox'].uncheck();
                    }
                }
            }.bind(this);
        }
        if (opt_rows) {
            return function () {
                var i;
                var el;
                if (checkbox.checked) {
                    for (i = 0; i < opt_rows.length; i++) {
                        el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');
                        el['MaterialCheckbox'].check();
                        opt_rows[i].classList.add(this.CssClasses_.IS_SELECTED);
                    }
                }
                else {
                    for (i = 0; i < opt_rows.length; i++) {
                        el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');
                        el['MaterialCheckbox'].uncheck();
                        opt_rows[i].classList.remove(this.CssClasses_.IS_SELECTED);
                    }
                }
            }.bind(this);
        }
    }
    /**
       * Creates a checkbox for a single or or multiple rows and hooks up the
       * event handling.
       *
       * @param {Element} row Row to toggle when checkbox changes.
       * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
       * @private
       */
    createCheckbox_(row, opt_rows) {
        var label = document.createElement('label');
        var labelClasses = [
            'mdl-checkbox',
            'mdl-js-checkbox',
            'mdl-js-ripple-effect',
            this.CssClasses_.SELECT_ELEMENT
        ];
        label.className = labelClasses.join(' ');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('mdl-checkbox__input');
        if (row) {
            checkbox.checked = row.classList.contains(this.CssClasses_.IS_SELECTED);
            checkbox.addEventListener('change', this.selectRow_(checkbox, row));
        }
        else if (opt_rows) {
            checkbox.addEventListener('change', this.selectRow_(checkbox, null, opt_rows));
        }
        label.appendChild(checkbox);
        componentHandler.upgradeElement(label, 'MaterialCheckbox');
        return label;
    }
    /**
       * Initialize element.
       */
    init() {
        if (this.element_) {
            var firstHeader = this.element_.querySelector('th');
            var bodyRows = Array.prototype.slice.call(this.element_.querySelectorAll('tbody tr'));
            var footRows = Array.prototype.slice.call(this.element_.querySelectorAll('tfoot tr'));
            var rows = bodyRows.concat(footRows);
            if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {
                var th = document.createElement('th');
                this.headerCheckbox = this.createCheckbox_(null, rows);
                th.appendChild(this.headerCheckbox);
                firstHeader.parentElement.insertBefore(th, firstHeader);
                for (var i = 0; i < rows.length; i++) {
                    var firstCell = rows[i].querySelector('td');
                    if (firstCell) {
                        var td = document.createElement('td');
                        if (rows[i].parentNode.nodeName.toUpperCase() === 'TBODY') {
                            var rowCheckbox = this.createCheckbox_(rows[i]);
                            td.appendChild(rowCheckbox);
                        }
                        rows[i].insertBefore(td, firstCell);
                    }
                }
                this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
            }
        }
    }
}