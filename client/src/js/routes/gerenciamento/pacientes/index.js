import Text from '../../../components/Form_text';

export default function (React, Row, Col, XPanel, PageTitle) {

    class Pacientes extends React.Component {
      render() {
        return (
          <section>
  
            <PageTitle title="Form Elements" showSearch={ true }/>
  
            <Row>
  
              <Col xs={ 12 }>
                <XPanel>
                  <XPanel.Title title="Form Design">
                  </XPanel.Title>
                  <XPanel.Content>
                    <Text Tamanho="3" Title="Nome Completo" Name="Nome-completo" Text="Nome..."/>
                    <Text Tamanho="3" Title="CPF" Name="Nome-completo" Text="Nome..."/>
                    <Text Tamanho="3" Title="RG" Name="Nome-completo" Text="Nome..."/>
                    <Text Tamanho="3" Title="Data de Nascimento" Name="Nome-completo" Text="Nome..."/>

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
  
    return Pacientes;
  };
  