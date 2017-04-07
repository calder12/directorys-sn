class Directories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: []
    };
  }


  componentDidMount() {
    axios.get(`https://nhlchat.com/wp-json/wp/v2/companies?orderby=title&order=asc`)
      .then(res => {
        const companies = res.data;
        this.setState({ companies });
      });
  }

  render() {
    return (
      <div>
        {this.state.companies.map(company =>
          <div>
            <div className="directory-title">
              <a href={company.acf.url}>{company.title.rendered}</a>
            </div>
            <div className="directory-description">
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