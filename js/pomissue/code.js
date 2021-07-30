let issues = [
    {
        "title": "(M) Fund LeMay CWPC Positions",
        "panel": "Education",
        "pe": "84752F | OTHER PROFESSIONAL EDUCATION",
        "majcom": "AETC",
        "seriesType": "Disconnects (Broken glass)",
        "assignedUser": "Read, Stacy Contractor",
        "category": "Planning Choice",
        "round": "3) Round 3",
        "afPanel": "H",
        "changeUser": "Raven, Robert Contractor",
        "changeDate": "Monday, March 22 2021 16:14",
        "deltas": [
            {
                "pe": "64233F",
                "appn": "28",
                "costcat": "58800",
                "wsc": "676035",
                "afProgram": "BAU000",
                "oac": "36",
                "sfi": "0D",
                "amounts": [
                    11615, 23129, 17700, 7026, 21036
                ]
            },
            {
                "pe": "84740F",
                "appn": "10",
                "costcat": "80901",
                "wsc": "JPAT00",
                "afProgram": "ALF000",
                "oac": "36",
                "sfi": "0D",
                "amounts": [
                    0, 0, 189879, 203443, 200351
                ]
            }
        ]
    },
    {
        "title": "(ZBT) PCE Realignment Actions",
        "panel": "Education",
        "pe": "84752F | OTHER PROFESSIONAL EDUCATION",
        "majcom": "AETC",
        "seriesType": "Zero Balance Transfers",
        "assignedUser": "Raven, Robert Contractor",
        "category": "ZBT",
        "round": "2) Round 2",
        "afPanel": "H",
        "changeUser": "Williams, George Contractor",
        "changeDate": "Friday, March 19 2021 09:47",
        "deltas": [
            {
                "pe": "84711F",
                "appn": "30",
                "costcat": "50640",
                "wsc": "000000",
                "afProgram": "ALL001",
                "oac": "64",
                "sfi": "0D",
                "amounts": [
                    1025, 1058, 1091, 1123, 1157
                ]
            },
            {
                "pe": "84711F",
                "appn": "30",
                "costcat": "55934",
                "wsc": "000000",
                "afProgram": "ALL001",
                "oac": "64",
                "sfi": "0D",
                "amounts": [
                    1776, 1069, 1069, 862, 905
                ]
            },
            {
                "pe": "84771F",
                "appn": "30",
                "costcat": "40924",
                "wsc": "000000",
                "afProgram": "ALL001",
                "oac": "64",
                "sfi": "0D",
                "amounts": [
                    -150, -167, -137, -210, -237
                ]
            }
        ]
    },
    {
        "title": "(ZBT) Align UHT baseline",
        "panel": "Flying Training",
        "pe": "84747F | UNDERGRADUATE PILOT TNG (UPT) ROTARY",
        "majcom": "AETC",
        "seriesType": "Zero Balance Transfers",
        "assignedUser": "Williams, George Contractor",
        "category": "ZBT",
        "round": "2) Round 2",
        "afPanel": "H",
        "changeUser": "Read, Stacy Contractor",
        "changeDate": "Tuesday, March 23 2021 11:08",
        "deltas": [
            {
                "pe": "84711F",
                "appn": "30",
                "costcat": "44900",
                "wsc": "000000",
                "afProgram": "ALL001",
                "oac": "64",
                "sfi": "0D",
                "amounts": [
                    -200, -200, 0, 0, 0
                ]
            },
            {
                "pe": "84711F",
                "appn": "30",
                "costcat": "61950",
                "wsc": "000000",
                "afProgram": "ALL001",
                "oac": "64",
                "sfi": "0D",
                "amounts": [
                    -120, -140, -164, -192, -224
                ]
            },
            {
                "pe": "84771F",
                "appn": "30",
                "costcat": "63720",
                "wsc": "000000",
                "afProgram": "ALL001",
                "oac": "64",
                "sfi": "0D",
                "amounts": [
                    -460, -538, -546, -256, -302
                ]
            },
            {
                "pe": "84772F",
                "appn": "30",
                "costcat": "40924",
                "wsc": "000000",
                "afProgram": "ALJ000",
                "oac": "64",
                "sfi": "0D",
                "amounts": [
                    -10, -10, -10, -11, -11
                ]
            },
            {
                "pe": "84772F",
                "appn": "30",
                "costcat": "55934",
                "wsc": "000000",
                "afProgram": "ALJ000",
                "oac": "64",
                "sfi": "0D",
                "amounts": [
                    -1450, -1697, -1690, -1690, -1588
                ]
            }
        ]
    }
];

let lorem = new Lorem();

$(document).ready(function () {
    $("#pomIssueTabs a").on("click", function (event) {
        event.preventDefault();
        $(this).tab("show");
    });

    $("button#showTableButton").click(function () {
        $("i#showTableIcon").toggleClass("fa-angle-double-up fa-angle-double-down");
    });

    $("tbody tr").click(function () {
        let id = this.id;
        let issue = issues[id];
        $("#title").val(issue.title);
        $("#panel").val(issue.panel);
        $("#pe").val(issue.pe);
        $("#majcom").val(issue.majcom);
        $("#seriestype").val(issue.seriesType);
        $("#asgnuser").val(issue.assignedUser);
        $("#category").val(issue.category);
        $("#round").val(issue.round);
        $("#afpanel").val(issue.afPanel);
        $("#lastChangedBy").text(issue.changeUser);
        $("#lastChangedDate").text(` on ${issue.changeDate}`);

        $("button#viewPerson").removeAttr("disabled");

        $("tr").removeClass("table-primary").filter("#" + id).addClass("table-primary");

        $("textarea").each(function (index, element) {
            let text = lorem.createText(25, Lorem.TYPE.WORD);
            text = text.charAt(0).toUpperCase() + text.slice(1) + ".";
            $(element).val(text);
        });


        let deltaTable = $("#delta-table tbody").empty();
        let totals = new Array(5).fill(0);

        for (let delta of issue.deltas) {
            let amounts = "", i = 0;

            for (let amount of delta.amounts) {
                amounts += `<td class="text-right">${amount.toLocaleString("en-US")}</td>`;
                totals[i++] += amount;
            }
            deltaTable.append(`<tr>
                <td>${delta.pe}</td>
                <td>${delta.appn}</td>
                <td>${delta.costcat}</td>
                <td>${delta.wsc}</td>
                <td>${delta.afProgram}</td>
                <td>${delta.oac}</td>
                <td>${delta.sfi}</td>
                ${amounts}
                </tr>`);
        }
        let totalRow = $(`<tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>Total</td>
                </tr>`);
        for (let total of totals) {
            totalRow.append(`<td class="text-right">${total.toLocaleString("en-us")}</td>`)
        }

        deltaTable.append(totalRow);

        randomCurrentProg();
    });

    $("select#cp-source").change(function(evt) {
       $("td#cp-source-td").text(evt.target.value);
       randomCurrentProg();
    });

    // select first easy for easier testing
    // $("a[href='#deltas']").click();
    // $("#issueTable tr#0 td").first().click();
    // randomCurrentProg();
});


function randomCurrentProg() {
    for (let yearNum = 0; yearNum < 7; yearNum++) {
        let randAmount = Math.floor(Math.random() * 25000) + 40000;
        $("td.cp-amount").eq(yearNum).text(randAmount.toLocaleString("en-us"));
    }
}