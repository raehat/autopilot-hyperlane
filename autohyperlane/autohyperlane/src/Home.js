import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Card id='card1'>
        <Card.Body>
          <div id='card1header'>
            Deploy hyperlane and warp routes to your chains in a minute!
          </div>
          <div className='btn-group' id='card12'>
            <Button className='buttoncard1' variant='secondary' size="lg">
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/deployhyperlaneandwarp">
                Deploy Hyperlane and Warp Routes
              </Link>
            </Button>
            <Button className='buttoncard1' variant='secondary' size="lg">
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/deploywarproutes">
                Deploy Warp Routes
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
      <div style={{color: 'white', textAlign: 'center', margin: 'auto', marginTop: '440px'}} id="footer">
        Developed during the EthGlobal Hackathon
      </div>
    </div>
  );
}

export default Home;
