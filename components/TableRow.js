import TableCell from '../components/TableCell';

class TableRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'rowId': props.rowId,
      'row': props.row
    }
  }

  render() {
    const { rowId, row } = this.state
    console.log(`in TableRow: rowId: ${rowId}, row: ${row}`)
    return (
      <tr key={rowId}>
        {row.map(rowElement => {
          <td>
            <TableCell data={rowElement}/>
          </td>
        })}
      </tr>
    );
  }
}

export default TableRow;
