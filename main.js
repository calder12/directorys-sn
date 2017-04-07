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

      const titleStyle = {
        "font-size": "30px",
        "margin-bottom": "10px"
      };

      const divStyle = {
        "margin-bottom": "20px"
      };
    return (
      <div style={ divStyle }>
        <h1>Directory</h1>
        {this.state.companies.map(company =>
          <div>
            <div style={ titleStyle }>
              <a href={company.acf.url}>{company.title.rendered}</a>
            </div>
            <div>
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