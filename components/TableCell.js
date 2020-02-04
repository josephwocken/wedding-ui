
class TableCell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'data': props.data
    }
  }

  render() {
    const { data } = this.state
    console.log(`in TableCell. data: ${data}`)
    return (
      <span style=''>
        {data}
      </span>
    );
  }
}

export default TableCell;
