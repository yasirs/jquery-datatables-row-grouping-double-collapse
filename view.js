$(document).ready(function(){
  $('#example').dataTable(({ "bLengthChange": false, "bPaginate": false}))
       .rowGrouping({bExpandableGrouping: true, 
                     iGroupingColumnIndex2: 2,
                     bExpandableGrouping2: true,
                     asExpandedGroups2: [], asExpandedGroups: []});
});
