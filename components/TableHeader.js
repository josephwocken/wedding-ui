import TableCell from '../components/TableCell';

class TableHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'headerElements': props.header
    }
  }

  render() {
    const { headerElements } = this.state
    console.log(`in TableHeader: header: ${headerElements}`)
    return (
      <thead>
        <tr>
          {headerElements.map(headerElement => {
            <th>
              <TableCell data={headerElement}/>
            </th>
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
