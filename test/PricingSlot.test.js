import React from "react";
import ReactDOM from "react-dom";
import { PricingSlot } from "../src/index";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";

Enzyme.configure({ adapter: new Adapter() });

const CustomTitle = ({ id, className, highlighted, highlightColor, text }) => (
    <div id={id} className={className}>
        <span style={{ color: highlighted ? "white" : highlightColor }}>
            {text}
        </span>
    </div>
);

const CustomPrice = ({ text }) => (
    <div>
        <span className="priceText">{text}</span>
        <span className="priceOther">Could be a subtitle here</span>
    </div>
);

describe("PricingSlot", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<PricingSlot />, div);
    });

    it("renders custom accessors without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <PricingSlot
                titleAccessor={CustomTitle}
                priceAccessor={CustomPrice}
            />,
            div
        );
    });
});
