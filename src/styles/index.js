import Image from '../images/template.png'; // Import using relative path

const customStyles = {
  card: {
    maxWidth: 345,
    boxShadow: '10px 10px 100px #777',
    margin: 20,
    border: '20px solid',
    borderColor: '#000',
    borderRadius: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  pos: {
    marginBottom: 12,
  },
  picker: {
    marginLeft: 90,
  },
  templateBack: {
    flexGrow: 1,
    width: '100%',
    height: 0,
    paddingTop: '100%',
    position: 'relative',
    zIndex: 0,
    marginTop: '-100%',
  },
  map: {
    width: '40%',
    marginLeft: '60%',
    marginTop: '63%',
  },
  templateFront: {
    flexGrow: 1,
    width: '100%',
    height: 0,
    paddingTop: '100%',
    position: 'relative',
    zIndex: 2,
    marginTop: '-100%',
  },
  template: {
    flexGrow: 1,
    width: '100%',
    height: 0,
    paddingTop: '100%',
    position: 'relative',
    zIndex: 1,
    backgroundImage: `url(${Image})`,
    backgroundSize: '100% 100%',
  },
  templateMap: {
    flexGrow: 1,
    width: '100%',
    height: 0,
    paddingTop: '100%',
    marginTop: '-100%',
    position: 'relative',
    zIndex: -1,
  },
  gridTemplate: {
    zIndex: 1,
    marginTop: '-100%',
    width: '100%',
  },
  cardTemplate: {
    width: '120%',
    marginTop: '283%',
    marginLeft: '5%',
  },
  mapTemplate: {
    width: 182,
    top: 210,
    marginLeft: 202,
    zIndex: 0,
    position: 'fixed',
    left: 0,
  },
  charName: {
    width: '100%',
    fontSize: '5vw',
    marginTop: '41%',
    marginLeft: '0%',
    color: '#FFF',
    fontWeight: 200,
  },
  raceName: {
    width: '100%',
    fontWeight: 200,
    fontSize: '3vw',
    marginTop: '66%',
    marginLeft: '16%',
  },
  className: {
    width: '100%',
    fontWeight: 200,
    fontSize: '3vw',
    marginTop: '66%',
    marginLeft: '-19%',
  },
  storyText: {
    width: '58%',
    fontWeight: 200,
    fontSize: '2.5vw',
    marginTop: '50.5%',
    marginLeft: '20%',
  },
  demiseText: {
    width: '40%',
    fontWeight: 200,
    fontSize: '2.5vw',
    marginTop: '78.5%',
    marginLeft: '33%',
  },
};

export default customStyles;
