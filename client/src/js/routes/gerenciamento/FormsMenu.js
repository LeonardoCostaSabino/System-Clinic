export default function (React, GroupMenuItem, MenuItem) {
  return (
    <GroupMenuItem title="Gerenciamento" icon="edit" to="/gerenciamento">
      <MenuItem title="Clinicas" icon="hospital-o" to="/gerenciamento/clinicas"/>
      <MenuItem title="Funcionarios" icon="male" to="/gerenciamento/funcionarios"/>
      <MenuItem title="Pacientes" icon="stethoscope" to="/gerenciamento/pacientes"/>
      <MenuItem title="Prontuarios" icon="paste" to="/gerenciamento/prontuarios"/>
      <MenuItem title="Dicom" icon="file-video-o" to="/gerenciamento/dicom"/>
    </GroupMenuItem>
  );
};
