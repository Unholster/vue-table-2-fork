  module.exports = function(h, that) {

    if (!that.opts.filterable) return '';

    var search = that.source=='client'?
                that.search.bind(that, that.data):
                that.serverSearch.bind(that);

  if (that.opts.filterable && !that.opts.filterByColumn) {
      var id = 'VueTables__search_' + that.id;
      return <div class="form-group form-inline VueTables__search">
      <label for={id}>{that.display('filter')}</label>
      <input class="form-control margin-left-custom"
      type="text"
      value={that.query}
      placeholder={that.display('filterPlaceholder')}
      on-keyup={search}
      id={id}
      />
      </div>
    }

    return '';
  }
