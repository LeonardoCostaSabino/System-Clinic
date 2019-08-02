import Text from '../../../components/Form_text';
import ButtonHeader from '../../../components/Button-Header';
import Date from '../../../components/Form.date';
import InputMask from 'react-input-mask';


export default function (React, Row, Col, XPanel, PageTitle) {

    class Pacientes extends React.Component {

        render() {
            return (
                <section>

                    <PageTitle title="Pacientes" showSearch={ true }/>
                    <Row className="text-center">
                        <Col xs={3}>
                        </Col>
                        <Col className="text-center" xs={6}>
                            <XPanel >
                                <XPanel.Title title="Controles">
                                </XPanel.Title>
                                <XPanel.Content >
                                    <ButtonHeader Icon="play" Class="btn btn-primary" Title=" Cadastrar" />
                                    <ButtonHeader Icon="edit"  Class="btn btn-info" Title=" Editar" />
                                    <ButtonHeader Icon="close" Class="btn btn-danger" Title=" Excluir" />
                                    <ButtonHeader Icon="binoculars" Class="btn btn-success" Title=" Consultar" />
                                </XPanel.Content>
                            </XPanel>
                        </Col>
                        <Col xs={3}>
                        </Col>
                    </Row>

                    <Row id="Cadastro">
                        <Col xs={ 12 }>
                            <XPanel>
                                <XPanel.Title title="Itens Obrigatórios">
                                </XPanel.Title>
                                <XPanel.Content>
                                    <Text Tamanho="3" Title="Nome Completo" Name="Nome-completo" Text="Nome..."/>
                                    <Text mask="999 999 999 99" maskChar="." tag={InputMask} Tamanho="3" Title="CPF" Name="CPF" Text="CPF..."/>
                                    <Text Tamanho="3" Title="RG" Name="RG" Text="RG..."/>
                                    <Date Tamanho="3" Title="Data de Nascimento" Name="Nome-completo" Text="Data..."/>
                                    <Text Tamanho="2" Title="Peso" Name="Peso" Text="Peso:75..."/>
                                    <Text Tamanho="3" Title="RG" Name="RG" Text="RG..."/>
                                    <Text Tamanho="3" Title="RG" Name="RG" Text="RG..."/>
                                    <Text Tamanho="3" Title="RG" Name="RG" Text="RG..."/>
                                </XPanel.Content>
                            </XPanel>
                        </Col>
                    </Row>

                    <Row id="Editar">
                        <Col xs={ 12 }>
                            <XPanel>
                                <XPanel.Title title="Editando os Dados de um Paciente...">
                                </XPanel.Title>
                                <XPanel.Content>
                                    {/*<PaginaEditar/>*/}
                                </XPanel.Content>
                            </XPanel>
                        </Col>
                    </Row>

                    <Row id="Excluir">
                        <Col xs={ 12 }>
                            <XPanel>
                                <XPanel.Title title="Excluindo Paciente...">
                                </XPanel.Title>
                                <XPanel.Content>
                                    {/*<PaginaExcluir/>*/}
                                </XPanel.Content>
                            </XPanel>
                        </Col>
                    </Row>

                    <Row id="Consultar">
                        <Col xs={ 12 }>
                            <XPanel>
                                <XPanel.Title title="A procura de uma paciente...">
                                </XPanel.Title>
                                <XPanel.Content>
                                    {/*<GridConsulta/>*/}
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
  