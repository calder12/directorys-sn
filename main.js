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
        const companies = res.data;
        this.setState({ companies });
      });
  }

  render() {
    return (
      <div class="row">
        <h1>Directory</h1>
        {this.state.companies.map(company =>
          <div class="summary-item">
            <div class="summary-title">
              <a href={company.acf.url}>{company.title.rendered}</a>
            </div>
            <div class="summary-excerpt">
              {company.acf.description}
            </div>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <Directories />,
  document.getElementById('directory')
);