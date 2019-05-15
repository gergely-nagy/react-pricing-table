import React from "react";

import { PricingTable, PricingSlot, PricingDetail } from "../src/index";

const CustomPrice = ({ className, text }) => {
    return (
        <li className={className}>
            <div
                style={{
                    fontSize: "0.7em",
                    color: "#afafaf"
                }}
            >
                Starting at
            </div>
            <span>{text}</span>
        </li>
    );
};

const CustomTitle = ({ id, className, text, subtitle }) => (
    <li id={id} className={className}>
        {text}
        <span
            style={{
                fontSize: "0.7em",
                color: "#3d3d3d",
                display: "block"
            }}
        >
            {subtitle}
        </span>
    </li>
);

class ExampleCustomAccessors extends React.Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit() {
        alert("button clicked");
    }

    render() {
        return (
            <PricingTable highlightColor="#86bc24">
                <PricingSlot
                    onClick={this.submit}
                    buttonText="TRY IT FREE"
                    title="FREE"
                    titleAccessor={props => (
                        <CustomTitle {...props} subtitle="For O/S projects" />
                    )}
                    priceText="$0/month"
                    priceAccessor={CustomPrice}
                    onClick={this.submit}
                >
                    <PricingDetail>
                        {" "}
                        <b>15</b> projects
                    </PricingDetail>
                    <PricingDetail>
                        {" "}
                        <b>5 GB</b> storage
                    </PricingDetail>
                    <PricingDetail>
                        {" "}
                        <b>5</b> users
                    </PricingDetail>
                    <PricingDetail strikethrough>
                        {" "}
                        <b>Time tracking</b>
                    </PricingDetail>
                </PricingSlot>
                <PricingSlot
                    highlighted
                    onClick={this.submit}
                    buttonText="SIGN UP"
                    title="BASIC"
                    titleAccessor={props => (
                        <CustomTitle {...props} subtitle="For small teams" />
                    )}
                    priceText="$24/month"
                    priceAccessor={CustomPrice}
                    onClick={this.submit}
                >
                    <PricingDetail>
                        {" "}
                        <b>35</b> projects
                    </PricingDetail>
                    <PricingDetail>
                        {" "}
                        <b>15 GB</b> storage
                    </PricingDetail>
                    <PricingDetail>
                        {" "}
                        <b>Unlimited</b> users
                    </PricingDetail>
                    <PricingDetail>
                        {" "}
                        <b>Time tracking</b>
                    </PricingDetail>
                </PricingSlot>
                <PricingSlot
                    onClick={this.submit}
                    buttonText="SIGN UP"
                    title="PROFESSIONAL"
                    titleAccessor={props => (
                        <CustomTitle {...props} subtitle="For larger teams" />
                    )}
                    priceText="$99/month"
                    priceAccessor={CustomPrice}
                    onClick={this.submit}
                >
                    <PricingDetail>
                        {" "}
                        <b>100</b> projects
                    </PricingDetail>
                    <PricingDetail>
                        {" "}
                        <b>30 GB</b> storage
                    </PricingDetail>
                    <PricingDetail>
                        {" "}
                        <b>Unlimited</b> users
                    </PricingDetail>
                    <PricingDetail>
                        {" "}
                        <b>Time tracking</b>
                    </PricingDetail>
                </PricingSlot>
                <PricingSlot
                    onClick={this.submit}
                    buttonText="SIGN UP"
                    title="ENTERPRISE"
                    titleAccessor={props => (
                        <CustomTitle {...props} subtitle="Special needs" />
                    )}
                    priceText="$200/month"
                    priceAccessor={CustomPrice}
                    onClick={this.submit}
                >
                    <PricingDetail>
                        {" "}
                        <b>Unlimited</b> projects
                    </PricingDetail>
                    <PricingDetail>
                        {" "}
                        <b>75 GB</b> storage
                    </PricingDetail>
                    <PricingDetail>
                        {" "}
                        <b>Unlimited</b> users
                    </PricingDetail>
                    <PricingDetail>
                        {" "}
                        <b>Time tracking</b>
                    </PricingDetail>
                </PricingSlot>
            </PricingTable>
        );
    }
}

export default ExampleCustomAccessors;
