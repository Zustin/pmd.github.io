var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":8242,"methods":[{"el":11,"sc":5,"sl":9},{"el":19,"sc":5,"sl":16}],"name":"ASTBlock","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_404":{"methods":[{"sl":9},{"sl":16}],"name":"testArrayAccess","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_587":{"methods":[{"sl":9},{"sl":16}],"name":"testLineNumbers","pass":true,"statements":[{"sl":10},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [404, 587], [404, 587], [], [], [], [], [], [404, 587], [], [404, 587], [], []]
