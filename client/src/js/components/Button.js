import React from 'react';
import Button from '@mapbox/mr-ui/button';

export default class Example extends React.Component {
    render() {
        const btnClasses = variantClasses => {
            return `${variantClasses} shadow-darken25`;
        };
        return (
            <div id="button-c">
                <Button
                    href="#button-c"
                    size="medium"
                    data-test="link-to-c"
                    transformClasses={btnClasses}
                >
                    You are here
                </Button>
            </div>
        );
    }
}