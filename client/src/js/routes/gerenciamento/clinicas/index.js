import ControlLabel from '@mapbox/mr-ui/control-label';
import ControlText from '@mapbox/mr-ui/control-text';

export default function (React, Row, Col, XPanel, PageTitle) {

    class Clinicas extends React.Component {
      render() {
        return (
          <section>
  
            <PageTitle title="Form Elements" showSearch={ true }/>
  
            <Row>
  
              <Col xs={ 12 }>
                <XPanel>
                  <XPanel.Title title="Pacientes">
                  </XPanel.Title>
                  <XPanel.Content>
                    <ControlLabel id="name" text="Enter your name" />
                    <ControlText id="basic" className="form-control"/>
                  </XPanel.Content>
                </XPanel>
              </Col>
            </Row>
          </section>
        );
      }
    }
  
    return Clinicas;
  };
  