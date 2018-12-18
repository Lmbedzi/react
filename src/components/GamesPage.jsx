
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import GamesList from '../GamesList';


class GamesPage extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <h2>Games List</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">

             <GamesList games={this.props.games}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired
}

//Games collection that returns games
function mapStateToProps(state){
  return{
    games: state.games
  }
}

  export default  connect(mapStateToProps)(GamesPage);