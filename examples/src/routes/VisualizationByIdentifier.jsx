// (C) 2007-2020 GoodData Corporation
import React from "react";

import ExampleWithSource from "../components/utils/ExampleWithSource";

import VisualizationColumnChartByIdentifierExample from "../components/VisualizationColumnChartByIdentifierExample";
import VisualizationMeasureValueFilterByIdentifierExample from "../components/VisualizationMeasureValueFilterByIdentifierExample";
import VisualizationMeasureValueFilterTreatNullAsZeroByIdentifierExample from "../components/VisualizationMeasureValueFilterTreatNullAsZeroByIdentifierExample";
import VisualizationTableExample from "../components/VisualizationTableByIdentifierExample";
import CustomVisualizationExample from "../components/CustomVisualizationExample";
import VisualizationBarExample from "../components/VisualizationBarByIdentifierExample";
import VisualizationLineExample from "../components/VisualizationLineByIdentifierExample";
import VisualizationAreaExample from "../components/VisualizationAreaByIdentifierExample";
import VisualizationHeadlineExample from "../components/VisualizationHeadlineByIdentifierExample";
import VisualizationScatterExample from "../components/VisualizationScatterByIdentifierExample";
import VisualizationBubbleExample from "../components/VisualizationBubbleByIdentifierExample";
import VisualizationPieExample from "../components/VisualizationPieByIdentifierExample";
import VisualizationDonutExample from "../components/VisualizationDonutByIdentifierExample";
import VisualizationTreemapExample from "../components/VisualizationTreemapByIdentifierExample";
import VisualizationHeatmapExample from "../components/VisualizationHeatmapByIdentifierExample";
import VisualizationComboExample from "../components/VisualizationComboByIdentifierExample";
import VisualizationBulletExample from "../components/VisualizationBulletByIdentifierExample";
import VisualizationGeoPushpinChartByIdentifierExample from "../components/VisualizationGeoPushpinChartByIdentifierExample";

import VisualizationColumnChartExampleSRC from "!raw-loader!../components/VisualizationColumnChartByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationTableExampleSRC from "!raw-loader!../components/VisualizationTableByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationMeasureValueFilterExampleSRC from "!raw-loader!../components/VisualizationMeasureValueFilterByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationMeasureValueFilterTreatNullAsZeroByIdentifierExampleSRC from "!raw-loader!../components/VisualizationMeasureValueFilterTreatNullAsZeroByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import CustomVisualizationExampleSRC from "!raw-loader!../components/CustomVisualizationExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationBarExampleSRC from "!raw-loader!../components/VisualizationBarByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationLineExampleSRC from "!raw-loader!../components/VisualizationLineByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationAreaExampleSRC from "!raw-loader!../components/VisualizationAreaByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationHeadlineExampleSRC from "!raw-loader!../components/VisualizationHeadlineByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationScatterExampleSRC from "!raw-loader!../components/VisualizationScatterByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationBubbleExampleSRC from "!raw-loader!../components/VisualizationBubbleByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationPieExampleSRC from "!raw-loader!../components/VisualizationPieByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationDonutExampleSRC from "!raw-loader!../components/VisualizationDonutByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationTreemapExampleSRC from "!raw-loader!../components/VisualizationTreemapByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationHeatmapExampleSRC from "!raw-loader!../components/VisualizationHeatmapByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationComboExampleSRC from "!raw-loader!../components/VisualizationComboByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationBulletExampleSRC from "!raw-loader!../components/VisualizationBulletByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationGeoPushpinChartByIdentifierExampleSRC from "!raw-loader!../components/VisualizationGeoPushpinChartByIdentifierExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first

export const VisualizationByIdentifier = () => (
    <div>
        <h1>Visualization by identifier</h1>

        <p>
            These are the examples of the generic Visualization component that uses identifier to identify
            insights.
        </p>

        <hr className="separator" />

        <h2 id="column-chart">Column Chart</h2>
        <ExampleWithSource
            for={VisualizationColumnChartByIdentifierExample}
            source={VisualizationColumnChartExampleSRC}
        />

        <hr className="separator" />

        <h2 id="table">Table</h2>
        <ExampleWithSource for={VisualizationTableExample} source={VisualizationTableExampleSRC} />

        <hr className="separator" />

        <h2 id="custom">Custom Visualization</h2>
        <p>
            Using <a href="https://github.com/recharts/recharts">Recharts library</a>
        </p>
        <ExampleWithSource for={CustomVisualizationExample} source={CustomVisualizationExampleSRC} />

        <hr className="separator" />

        <h2 id="bar">Bar Chart</h2>
        <ExampleWithSource for={VisualizationBarExample} source={VisualizationBarExampleSRC} />

        <hr className="separator" />

        <h2 id="line">Line Chart</h2>
        <ExampleWithSource for={VisualizationLineExample} source={VisualizationLineExampleSRC} />

        <hr className="separator" />

        <h2 id="area">Stacked Area Chart</h2>
        <ExampleWithSource for={VisualizationAreaExample} source={VisualizationAreaExampleSRC} />

        <hr className="separator" />

        <h2 id="headline">Headline</h2>
        <ExampleWithSource for={VisualizationHeadlineExample} source={VisualizationHeadlineExampleSRC} />

        <hr className="separator" />

        <h2 id="scatter">Scatter Plot</h2>
        <ExampleWithSource for={VisualizationScatterExample} source={VisualizationScatterExampleSRC} />

        <hr className="separator" />

        <h2 id="bubble">Bubble Chart</h2>
        <ExampleWithSource for={VisualizationBubbleExample} source={VisualizationBubbleExampleSRC} />

        <hr className="separator" />

        <h2 id="bullet">Bullet Chart</h2>
        <ExampleWithSource for={VisualizationBulletExample} source={VisualizationBulletExampleSRC} />

        <hr className="separator" />

        <h2 id="pie">Pie Chart</h2>
        <ExampleWithSource for={VisualizationPieExample} source={VisualizationPieExampleSRC} />

        <hr className="separator" />

        <h2 id="donut">Donut Chart</h2>
        <ExampleWithSource for={VisualizationDonutExample} source={VisualizationDonutExampleSRC} />

        <hr className="separator" />

        <h2 id="treemap">Treemap</h2>
        <ExampleWithSource for={VisualizationTreemapExample} source={VisualizationTreemapExampleSRC} />

        <hr className="separator" />

        <h2 id="heatmap">Heatmap</h2>
        <ExampleWithSource for={VisualizationHeatmapExample} source={VisualizationHeatmapExampleSRC} />

        <hr className="separator" />

        <h2 id="combo">Combo Chart</h2>
        <ExampleWithSource for={VisualizationComboExample} source={VisualizationComboExampleSRC} />

        <hr className="separator" />

        <h2 id="geo-pushpin-chart">Geo Pushpin Chart</h2>
        <ExampleWithSource
            for={VisualizationGeoPushpinChartByIdentifierExample}
            source={VisualizationGeoPushpinChartByIdentifierExampleSRC}
        />

        <hr className="separator" />

        <h2 id="measure-value-filter-column-chart">Measure Value Filter Column Chart</h2>
        <ExampleWithSource
            for={VisualizationMeasureValueFilterByIdentifierExample}
            source={VisualizationMeasureValueFilterExampleSRC}
        />

        <h2 id="measure-value-filter-treat-null-as-zero">
            Measure Value Filter that treats measure null values as zero
        </h2>
        <ExampleWithSource
            for={VisualizationMeasureValueFilterTreatNullAsZeroByIdentifierExample}
            source={VisualizationMeasureValueFilterTreatNullAsZeroByIdentifierExampleSRC}
        />
    </div>
);

export default VisualizationByIdentifier;
