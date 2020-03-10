import mirador from 'mirador';
import config from './elucidatePluginConfig';

class MiradorElucidatePlugin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { receiveAnnotation, canvas } = this.props;
        if (canvas) {
            fetch(config.databaseUrl(canvas.id), {
                method: 'GET',
                headers: config.databaseHeaders,
            }).then(res => res.json())
            .then(res => {
                receiveAnnotation(canvas.id, res.id, res.json);
            }, (error) => {
                console.error(error);
            });
        }
        return null;
    }
}

function mapStateToProps(state, { windowId }) {
    return {
        canvas: mirador.selectors.getSelectedCanvas(state, windowId),
    }
}

const mapDispatchToProps = {
    receiveAnnotation: mirador.actions.receiveAnnotation
};

export default {
    target: 'WindowTopBarButtons',
    mode: 'replace',
    component: MiradorElucidatePlugin,
    mapStateToProps: mapStateToProps,
    mapDispatchToProps: mapDispatchToProps,
};