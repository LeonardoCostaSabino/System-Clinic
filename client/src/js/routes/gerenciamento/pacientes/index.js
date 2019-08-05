import Text from '../../../components/Form_text';
import ButtonHeader from '../../../components/Button-Header';
import Date from '../../../components/Form.date';
import Password from '../../../components/Form.pass';

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
                                    <Text Tamanho="4" Title="Nome Completo" Name="Nome-completo" Text="Nome..."/>
                                    <Text Tamanho="2" Mascara="999.999.999-99" Title="CPF" Name="CPF" Text="CPF..."/>
                                    <Text Tamanho="2" Mascara="99.999.999-9" Title="RG" Name="RG" Text="RG..."/>
                                    <Date Tamanho="4" Title="Data de Nascimento" Name="Nome-completo" Text="Data..."/>
                                    {/*<Text Tamanho="2" Mascara="999 KG" Title="Peso" Name="Peso" Text="Peso:75"/>*/}
                                    <Text Tamanho="3" Mascara="(21) 9999-9999" Title="Telefone" Name="Telefone_id" Text="Telefone..."/>
                                    <Text Tamanho="3" Title="CEP" Name="Cep" Text="Cep do Responsavel..."/>
                                    <Text Tamanho="3" Title="Logradouro" Name="RG" Text="Logradouro..."/>
                                    <Text Tamanho="3" Title="Bairro" Name="RG" Text="Bairro..."/>
                                    <Text Tamanho="3" Title="Cidade" Name="RG" Text="Cidade..."/>
                                    <Text Tamanho="3" Title="UF" Name="RG" Text="UF..."/>
                                    <Text Tamanho="3" Title="Nome de Usuário" Name="RG" Text="Nome de Usuário..."/>
                                    <Password Tamanho="3" Title="Senha" Name="RG" Text="Senha do Usuário..."/>
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
  