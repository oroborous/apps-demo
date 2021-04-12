let issues = [
    {
        "title": "(M) Fund LeMay CWPC Positions",
        "panel": "Education",
        "pe": "84752F | OTHER PROFESSIONAL EDUCATION",
        "majcom": "AETC",
        "seriesType": "Disconnects (Broken glass)",
        "assignedUser" : "Read, Stacy Contractor",
        "category": "Planning Choice",
        "round": "3) Round 3",
        "afPanel": "H",
        "changeUser": "Raven, Robert Contractor",
        "changeDate": "Monday, March 22 2021 16:14"
    },
    {
        "title": "(ZBT) PCE Realignment Actions",
        "panel": "Education",
        "pe": "84752F | OTHER PROFESSIONAL EDUCATION",
        "majcom": "AETC",
        "seriesType": "Zero Balance Transfers",
        "assignedUser" : "Raven, Robert Contractor",
        "category": "ZBT",
        "round": "2) Round 2",
        "afPanel": "H",
        "changeUser": "Williams, George Contractor",
        "changeDate": "Friday, March 19 2021 09:47"
    },
    {
        "title": "(ZBT) Align UHT baseline",
        "panel": "Flying Training",
        "pe": "84747F | UNDERGRADUATE PILOT TNG (UPT) ROTARY",
        "majcom": "AETC",
        "seriesType": "Zero Balance Transfers",
        "assignedUser" : "Williams, George Contractor",
        "category": "ZBT",
        "round": "2) Round 2",
        "afPanel": "H",
        "changeUser": "Read, Stacy Contractor",
        "changeDate": "Tuesday, March 23 2021 11:08"
    }
];

let lorem = new Lorem();

$(document).ready(function() {
   $("#pomIssueTabs a").on("click", function(event) {
       event.preventDefault();
       $(this).tab("show");
   });

   $("button#showTableButton").click(function() {
      $("i#showTableIcon").toggleClass("fa-angle-double-up fa-angle-double-down");
   });

   $("tbody tr").click(function() {
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

       $("textarea").each(function(index, element) {
           let text = lorem.createText(25, Lorem.TYPE.WORD);
           text = text.charAt(0).toUpperCase() + text.slice(1) + ".";
           $(element).val(text);
       })

   });
});