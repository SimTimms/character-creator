import Image from '../images/template.png'; // Import using relative path

const customStyles = {
  printButton: { position: 'relative', zIndex: 100 },
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
  header: {
    marginTop: '5%',
    fontSize: '2.5vw',
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
    position: 'fixed',
    zIndex: -1,
  },
  gridTemplate: {
    zIndex: 1,
    marginTop: '-100%',
    width: '100%',
  },
  cardTemplate: {
    width: '81%',
    marginTop: '283%',
    marginLeft: '-10%',
  },
  twitter: {
    position: 'relative',
    zIndex: 100,
  },
  raceBack: {
    width: '52%',
    marginLeft: '32%',
    marginTop: '26%',
  },
  classBack: {
    width: '52%',
    marginLeft: '-37%',
    marginTop: '26%',
  },
  raceCarousel: {
    width: '52%',
    marginLeft: '40%',
    marginTop: '26%',
  },
  classCarousel: {
    width: '52%',
    marginLeft: '5%',
    marginTop: '26%',
  },
  demiseHeader: {
    marginTop: '70.6%',
    fontSize: '2.4vw',
  },
  lastSeen: {
    marginTop: '88.5%',
    marginLeft: '-15%',
    fontSize: '2.4vw',
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
    marginTop: '41.4%',
    marginLeft: '0%',
    color: '#FFF',
    fontWeight: 200,
  },
  raceName: {
    width: '100%',
    fontWeight: 200,
    fontSize: '3vw',
    marginTop: '64.5%',
    marginLeft: '16%',
  },
  className: {
    width: '100%',
    fontWeight: 200,
    fontSize: '3vw',
    marginTop: '64.5%',
    marginLeft: '-19%',
  },
  storyText: {
    width: '58%',
    fontWeight: 200,
    fontSize: '2vw',
    marginTop: '50.5%',
    marginLeft: '20%',
  },
  demiseText: {
    width: '45%',
    fontWeight: 200,
    fontSize: '2vw',
    marginTop: '77%',
    marginLeft: '30%',
  },
};

export default customStyles;
