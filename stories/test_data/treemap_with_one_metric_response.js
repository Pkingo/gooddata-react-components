// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResponse: {
            dimensions: [
                {
                    headers: [],
                },
                {
                    headers: [
                        {
                            measureGroupHeader: {
                                items: [
                                    {
                                        measureHeaderItem: {
                                            name: "Amount",
                                            format: "#,##0.00",
                                            localIdentifier: "amountMetric",
                                            uri: "/gdc/md/" + projectId + "/obj/1279",
                                            identifier: "ah1EuQxwaCqs",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
            links: {
                executionResult:
                    "/gdc/app/projects/d20eyb3wfs0xe5l0lfscdnrnyhq1t42q/executionResults/9209710971048426496?q=eAGtkMtOwzAQRX%2BlcraRHNwEkUqIFaBuAFV0VWXhxm5q4kfkh0iI8u%2FYBEJViUWA5fhqrs%2BcHmja%0AKG0fsKBgBbbSMsspATEoFXdCGrDaAUGtZuW9Vq4BRfw5hqQHB6UFtn4ziqMo8WvGCYF151%2F88FEW%0AwoU6LB6b8JGTzDJqfDi2ronPYUVKKAhsl3WK8rRN6yTh%2Bi0jtGpleSm7upPHY4ag2r9AdIUyMHgO%0ArV5HCGw9395Z%2Bhzgfd%2BTVsSV9hyHMNNw3N155vnf5hnyfXts6C2ngkq73aznoudpDum4bW4YuT5R%0A9I08XfMLxjQPlcpiHszsimKIezAVfunZ0Iop%2Ba92LhKU%2FlmPL1n%2B5Gdinq6Zryf0n%2FsphncIZv7e%0A&c=53c5307a72aa3767ae052e925d7f6a74&offset=0%2C0&limit=1000%2C1000&dimensions=2&totals=0%2C0",
            },
        },
    };
};
