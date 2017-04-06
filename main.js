class Directories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: []
    };
  }

  componentDidMount() {
    axios.get(`http://snwp.app/wp-json/wp/v2/companies?orderby=title&order=asc`)
      .then(res => {
        console.log(res)
        const companies = res.data;
        console.log(companies)
        this.setState({ companies });
        console.log(this.state)
      });
  }

  render() {
    return (
      <div>
        <h1>Directory</h1>
        <ul>
        {this.state.companies.map(company =>
            <li>
              <a href={company.acf.url}>{company.title.rendered}</a> - {company.acf.description}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Directories />,
  document.getElementById('directory')
);