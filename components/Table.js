import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'tableHeader': props.tableHeader,
      'tableRows': props.tableRows
    }
  }

  render() {
    const { tableHeader, tableRows } = this.state
    var rowIdCounter = 0
    console.log(`in Table. table header: ${tableHeader}`)
    console.log(`in Table. table rows: ${tableRows}`)
    for (var i = 0; i < tableRows.length; i++) {
      console.log(`table row at index: ${i}. row: ${tableRows[i]}`)
    }
    return (
      <table>
        <TableHeader header={tableHeader}/>
        <tbody>
          {tableRows.map(row => {
            <TableRow rowId='0' row={row}/>
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
