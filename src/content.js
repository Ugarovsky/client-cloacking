import React from 'react';
import './App.css';
import './index.css';
import GreyPage from './greyContent/page'
import WhitePage from './whiteContent/page'
import timeFilter from './filters/timeFilter'
import geoFilter from './filters/geoFilter'

export default class Content extends React.Component {
    
    render() {

        var TimeZone = this.props.geo.TimeZone;
        var geoCode = this.props.geo.GeoCode;

        if (timeFilter(TimeZone) && geoFilter(geoCode)){

            return (
                <WhitePage />
            )
        }

        else {

            return (
                <GreyPage />
            )

        }

    }    
}