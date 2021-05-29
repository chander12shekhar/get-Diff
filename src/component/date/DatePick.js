import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePick.css";

export default class DatePick extends Component {
    constructor() {
        super();
        this.state = {
            toDate: "",
            fromDate: "",
            totalDays: "",
            totalHours: "",
            totalMin: "",
            totalSec: ""
        }
    }
    changeToDate(value) {
        this.setState({
            toDate: value
        })
    }
    changeFromDate(value, formattedValue) {
        this.setState({
            fromDate: value
        })
    }
    getDateDiff() {
        let date1 = this.state.toDate;
        let date2 = this.state.fromDate;
        const diffInMs = Math.abs(date2 - date1);
        let days = diffInMs / (1000 * 60 * 60 * 24);
        let hours = diffInMs / (1000 * 60 * 60);
        let min = diffInMs / (1000 * 60);
        let sec = diffInMs / 1000;
        this.setState({
            totalDays: days,
            totalHours: hours,
            totalMin: min,
            totalSec: sec
        })
    }
    render() {
        return (
            <div className="datePickMain">
                <div className="toDate">
                    <label>To Date</label>
                    <DatePicker id="toDate" selected={this.state.toDate} onChange={(e) => this.changeToDate(e)} /><br />
                </div>
                <br />
                <div className="fromDate">
                    <label>From Date</label>
                    <DatePicker id="fromDate" selected={this.state.fromDate} onChange={(e) => this.changeFromDate(e)} />
                </div>
                <br />
                <button onClick={() => this.getDateDiff()}>Get Diff</button>
                <br />
                <div className="dateResult">
                    <div className="totalDays">Total Days : {this.state.totalDays}</div>
                    <div className="totalHours">Total Hours : {this.state.totalHours}</div>
                    <div className="totalMin">Total Minutes : {this.state.totalMin}</div>
                    <div className="totalSec">Total Sec : {this.state.totalSec}</div>
                </div>
            </div>
        )
    }
}