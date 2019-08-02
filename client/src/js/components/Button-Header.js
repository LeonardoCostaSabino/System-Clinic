import  React,{Fragment} from 'react';

export default class ButtonHeader extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hover:false
        };
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        let Mouse = this.state.hover; //Estado
        this.setState({
            hover: !Mouse,
        });
;    };


    render() {

        let linkStyle;
        if (this.state.hover) {
            linkStyle = {color: '#162ded',cursor: 'pointer'}
        } else {
            linkStyle = {color: '#fffbf9'}
        }

        const {Title, Icon, Class} = this.props;
        return (
            <Fragment>
                 <button onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={linkStyle} type="button" className={Class} >
                     <i className={`fa fa-${Icon}`}/>
                    {Title}
                </button>
            </Fragment>
        )
    }
}