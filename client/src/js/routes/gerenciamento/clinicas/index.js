import Text from '../../../components/Form_text';
import Button from '@mapbox/mr-ui/button';
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
                    <Text Tamanho="2" Title="NomeCompleto" Name="Nome-completo" Text="Nome..."/>
                    <Text Tamanho="5" Title="NomeCompleto" Name="Nome-completo" Text="Nome..."/>
                    <Text Tamanho="5" Title="NomeCompleto" Name="Nome-completo" Text="Nome..."/>
                    <Text Tamanho="5" Title="NomeCompleto" Name="Nome-completo" Text="Nome..."/>
                    <Text Tamanho="6" Title="NomeCompleto" Name="Nome-completo" Text="Nome..."/>
                  </XPanel.Content>
                </XPanel>
              </Col>
  
            </Row>
  
            <Row>
  
              <Col xs={ 12 } md={ 6 }>
  
                <Row>
                  <Col xs={ 12 }>
                    <XPanel>
                      <XPanel.Title title="Form Design">
                      </XPanel.Title>
                      <XPanel.Content>
                        <span>tba...</span>
                      </XPanel.Content>
                    </XPanel>
                  </Col>
  
                  <Col xs={ 12 }>
                    <XPanel>
                      <XPanel.Title title="Star Rating">
                      </XPanel.Title>
                      <XPanel.Content>
                        <span>tba...</span>
                      </XPanel.Content>
                    </XPanel>
                  </Col>
                </Row>
  
              </Col>
  
              <Col xs={ 12 } md={ 6 }>
                <XPanel>
                  <XPanel.Title title="Form Basic Elements">
                  </XPanel.Title>
                  <XPanel.Content>
                    <div style={ { height: '150px' } }>tba...</div>
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
  