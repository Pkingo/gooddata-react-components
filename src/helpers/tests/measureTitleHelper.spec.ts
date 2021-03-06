// (C) 2007-2020 GoodData Corporation
import { fillMissingTitles, ignoreTitlesForSimpleMeasures } from "../measureTitleHelper";
import { visualizationObjects } from "../../../__mocks__/fixtures";
import { VisualizationObject } from "@gooddata/typings";
import IVisualizationObjectContent = VisualizationObject.IVisualizationObjectContent;
import IMeasure = VisualizationObject.IMeasure;
import BucketItem = VisualizationObject.BucketItem;

function findVisualizationObjectFixture(metaTitle: string): IVisualizationObjectContent {
    const visualizationObject = visualizationObjects.find(
        chart => chart.visualizationObject.meta.title === metaTitle,
    );
    return visualizationObject.visualizationObject.content;
}

describe("measureTitleHelper", () => {
    describe("fillMissingTitles", () => {
        const locale = "en-US";

        function getTitleOfMeasure(
            visualizationObject: IVisualizationObjectContent,
            localIdentifier: string,
        ): string {
            const measureBucketItems = visualizationObject.buckets[0].items;
            const matchingMeasure: IMeasure = measureBucketItems
                .map(bucketItem => bucketItem as IMeasure)
                .find(bucketItem => bucketItem.measure.localIdentifier === localIdentifier);

            return matchingMeasure === undefined ? undefined : matchingMeasure.measure.title;
        }

        it("should set title of derived measures based on master title when master is NOT renamed", () => {
            const visualizationObjectContent = findVisualizationObjectFixture("Over time comparison");
            const result = fillMissingTitles(visualizationObjectContent, locale, 1000);

            expect(getTitleOfMeasure(result, "m1")).toEqual("# Accounts with AD Query");

            expect(getTitleOfMeasure(result, "m1_pop")).toEqual("# Accounts with AD Query - SP year ago");

            expect(getTitleOfMeasure(result, "m1_previous_period")).toEqual(
                "# Accounts with AD Query - period ago",
            );
        });

        it("should set title of derived measures based on master alias when master is renamed", () => {
            const visualizationObjectContent = findVisualizationObjectFixture("Over time comparison alias");
            const result = fillMissingTitles(visualizationObjectContent, locale, 1000);

            expect(getTitleOfMeasure(result, "m1")).toEqual("# Accounts with AD Query");

            expect(getTitleOfMeasure(result, "m1_pop")).toEqual("AD Queries - SP year ago");

            expect(getTitleOfMeasure(result, "m1_previous_period")).toEqual("AD Queries - period ago");
        });

        it("should ignore title attribute when it is included in derived / arithmetic measure (computed title)", () => {
            const visualizationObjectContent = findVisualizationObjectFixture(
                "Arithmetic and derived measures",
            );
            const result = fillMissingTitles(visualizationObjectContent, locale, 1000);

            expect(getTitleOfMeasure(result, "am1")).toEqual(
                "Sum of AD Accounts and AD Accounts - SP year ago",
            );

            expect(getTitleOfMeasure(result, "m1_pop")).toEqual("AD Accounts - SP year ago");
        });

        it("should set title of derived based on master title even when it is located in a different bucket", () => {
            const visualizationObjectContent = findVisualizationObjectFixture(
                "Headline over time comparison",
            );
            const result = fillMissingTitles(visualizationObjectContent, locale, 1000);

            expect(result.buckets[0].items).toEqual([
                {
                    measure: {
                        localIdentifier: "fdd41e4ca6224cd2b5ecce15fdabf062",
                        title: "Sum of Email Clicks",
                        format: "#,##0.00",
                        definition: {
                            measureDefinition: {
                                aggregation: "sum",
                                item: {
                                    uri: "/gdc/md/yrungi0zwpoud7h1kmh6ldhp0vgkpi41/obj/15428",
                                },
                            },
                        },
                    },
                },
            ]);

            expect(result.buckets[1].items).toEqual([
                {
                    measure: {
                        localIdentifier: "fdd41e4ca6224cd2b5ecce15fdabf062_pop",
                        title: "Sum of Email Clicks - SP year ago",
                        definition: {
                            popMeasureDefinition: {
                                measureIdentifier: "fdd41e4ca6224cd2b5ecce15fdabf062",
                                popAttribute: {
                                    uri: "/gdc/md/yrungi0zwpoud7h1kmh6ldhp0vgkpi41/obj/15330",
                                },
                            },
                        },
                    },
                },
                {
                    measure: {
                        localIdentifier: "fdd41e4ca6224cd2b5ecce15fdabf062_previous_period",
                        title: "Sum of Email Clicks - period ago",
                        definition: {
                            previousPeriodMeasure: {
                                measureIdentifier: "fdd41e4ca6224cd2b5ecce15fdabf062",
                                dateDataSets: [
                                    {
                                        dataSet: {
                                            uri: "/gdc/md/yrungi0zwpoud7h1kmh6ldhp0vgkpi41/obj/921",
                                        },
                                        periodsAgo: 1,
                                    },
                                ],
                            },
                        },
                    },
                },
            ]);
        });

        it("should set correct titles to arithmetic measures in simple tree", () => {
            const visualizationObjectContent = findVisualizationObjectFixture("Arithmetic measures tree");
            const result = fillMissingTitles(visualizationObjectContent, locale, 1000);

            expect(getTitleOfMeasure(result, "tree_level_0")).toEqual("Sum of AD Accounts and KD Accounts");

            expect(getTitleOfMeasure(result, "tree_level_1")).toEqual(
                "Sum of AD Accounts and Sum of AD Accounts and KD Accounts",
            );

            expect(getTitleOfMeasure(result, "tree_level_2")).toEqual(
                "Sum of AD Accounts and Sum of AD Accounts and Sum of AD Accounts and KD Accounts",
            );
        });

        it("should respect max arithmetic measure title length", () => {
            const visualizationObjectContent = findVisualizationObjectFixture("Arithmetic measures tree");
            const result = fillMissingTitles(visualizationObjectContent, locale, 50);

            expect(getTitleOfMeasure(result, "tree_level_0")).toEqual("Sum of AD Accounts and KD Accounts");

            expect(getTitleOfMeasure(result, "tree_level_1")).toEqual(
                "Sum of AD Accounts and Sum of AD Accounts and KD A…",
            );

            expect(getTitleOfMeasure(result, "tree_level_2")).toEqual(
                "Sum of AD Accounts and Sum of AD Accounts and Sum …",
            );
        });

        it("should set correct titles to arithmetic measures in the complex tree", () => {
            const visualizationObjectContent = findVisualizationObjectFixture("Arithmetic measures");
            const result = fillMissingTitles(visualizationObjectContent, locale, 1000);

            expect(
                getTitleOfMeasure(result, "arithmetic_measure_created_from_complicated_arithmetic_measures"),
            ).toEqual(
                "Sum of Sum of Sum of AD Queries and KD Queries and Sum of Renamed SP last year M1 " +
                    "and Renamed previous period M1 and Sum of # Accounts with AD Query and # Accounts with KD Query",
            );

            expect(getTitleOfMeasure(result, "arithmetic_measure_created_from_simple_measures")).toEqual(
                "Sum of # Accounts with AD Query and # Accounts with KD Query",
            );

            expect(
                getTitleOfMeasure(result, "arithmetic_measure_created_from_renamed_simple_measures"),
            ).toEqual("Sum of AD Queries and KD Queries");

            expect(getTitleOfMeasure(result, "arithmetic_measure_created_from_derived_measures")).toEqual(
                "Sum of # Accounts with AD Query - SP year ago and # Accounts with AD Query - period ago",
            );

            expect(
                getTitleOfMeasure(result, "arithmetic_measure_created_from_renamed_derived_measures"),
            ).toEqual("Sum of Renamed SP last year M1 and Renamed previous period M1");

            expect(getTitleOfMeasure(result, "arithmetic_measure_created_from_arithmetic_measures")).toEqual(
                "Sum of Sum of AD Queries and KD Queries and Sum of Renamed SP last year M1 and " +
                    "Renamed previous period M1",
            );

            expect(getTitleOfMeasure(result, "derived_measure_from_arithmetic_measure")).toEqual(
                "Sum of # Accounts with AD Query and # Accounts with KD Query - SP year ago",
            );

            expect(
                getTitleOfMeasure(result, "invalid_arithmetic_measure_with_missing_dependency"),
            ).toBeUndefined();

            expect(
                getTitleOfMeasure(result, "invalid_arithmetic_measure_with_cyclic_dependency_1"),
            ).toBeUndefined();

            expect(
                getTitleOfMeasure(result, "invalid_arithmetic_measure_with_cyclic_dependency_2"),
            ).toBeUndefined();
        });
    });

    describe("ignoreTitlesForSimpleMeasures", () => {
        function getInfoFromMeasure(
            visualizationObject: IVisualizationObjectContent,
            localIdentifier: string,
            infoKey: string,
        ): string {
            const measureBucketItems: BucketItem[] = visualizationObject.buckets[0].items;
            const matchingMeasure: IMeasure = measureBucketItems
                .map((bucketItem: BucketItem): IMeasure => bucketItem as IMeasure)
                .find(
                    (bucketItem: IMeasure): boolean => bucketItem.measure.localIdentifier === localIdentifier,
                );

            return matchingMeasure === undefined ? undefined : matchingMeasure.measure[infoKey];
        }

        it.each([
            "arithmetic_measure_created_from_complicated_arithmetic_measures",
            "m1",
            "m2",
            "m3",
            "m4",
            "m1_pop",
            "m1_previous_period",
            "m1_pop_renamed",
            "m1_previous_period_renamed",
            "derived_measure_from_arithmetic_measure",
            "arithmetic_measure_created_from_simple_measures",
            "arithmetic_measure_created_from_renamed_simple_measures",
            "arithmetic_measure_created_from_simple_measures",
            "arithmetic_measure_created_from_arithmetic_measures",
            "arithmetic_measure_created_from_renamed_derived_measures",
            "invalid_arithmetic_measure_with_missing_dependency",
            "invalid_arithmetic_measure_with_cyclic_dependency_1",
            "invalid_arithmetic_measure_with_cyclic_dependency_2",
        ])(
            'should delete title of the measure which is not an adhoc and has localIdentifier "%s"',
            (value: string) => {
                const visualizationObjectContent = findVisualizationObjectFixture("Arithmetic measures");
                const result = ignoreTitlesForSimpleMeasures(visualizationObjectContent);
                expect(getInfoFromMeasure(result, value, "title")).toBeUndefined();
            },
        );

        it("should preserve all measures' aliases", () => {
            const visualizationObjectContent = findVisualizationObjectFixture("Arithmetic measures");
            const result = ignoreTitlesForSimpleMeasures(visualizationObjectContent);
            expect(getInfoFromMeasure(result, "m3", "alias")).toEqual("AD Queries");
            expect(getInfoFromMeasure(result, "m4", "alias")).toEqual("KD Queries");
        });

        it("should not delete a measure's title if the measure is an adhoc with aggregate", () => {
            const visualizationObjectContent = findVisualizationObjectFixture(
                "Headline over time comparison",
            );
            const result = ignoreTitlesForSimpleMeasures(visualizationObjectContent);
            expect(getInfoFromMeasure(result, "fdd41e4ca6224cd2b5ecce15fdabf062", "title")).toEqual(
                "Sum of Email Clicks",
            );
        });

        it("should not delete a measure's title if the measure is an adhoc with computeRatio", () => {
            const visualizationObjectContent = findVisualizationObjectFixture(
                "Adhoc measure with computeRatio",
            );
            const result = ignoreTitlesForSimpleMeasures(visualizationObjectContent);
            expect(getInfoFromMeasure(result, "fdd41e4ca6224cd2b5ecce15fdabf062", "title")).toEqual(
                "Sum of Email Clicks",
            );
        });

        it("should not delete a measure's title if the measure is an adhoc with filters", () => {
            const visualizationObjectContent = findVisualizationObjectFixture("Adhoc measure with filters");
            const result = ignoreTitlesForSimpleMeasures(visualizationObjectContent);
            expect(getInfoFromMeasure(result, "fdd41e4ca6224cd2b5ecce15fdabf062", "title")).toEqual(
                "Sum of Email Clicks",
            );
        });

        it("should not delete a measure's title if there is another measure with date filter", () => {
            const visualizationObjectContent = findVisualizationObjectFixture(
                "Adhoc measure with date filters",
            );
            const result = ignoreTitlesForSimpleMeasures(visualizationObjectContent);
            expect(getInfoFromMeasure(result, "fdd41e4ca6224cd2b5ecce15fdabf062", "title")).toEqual(
                "Sum of Email Clicks",
            );
            expect(getInfoFromMeasure(result, "fdd41e4ca6224cd2b5ecce15fdabf063", "title")).toEqual(
                "Sum of Something",
            );
        });
    });
});
