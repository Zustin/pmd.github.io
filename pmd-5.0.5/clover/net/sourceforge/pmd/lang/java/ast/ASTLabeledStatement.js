var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":18,"id":10091,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":16,"sc":5,"sl":14}],"name":"ASTLabeledStatement","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_456":{"methods":[{"sl":10},{"sl":14}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":15}]},"test_47":{"methods":[{"sl":10},{"sl":14}],"name":"testLabelledBreakLockup","pass":true,"statements":[{"sl":11},{"sl":15}]},"test_77":{"methods":[{"sl":10},{"sl":14}],"name":"testPmdOptions","pass":true,"statements":[{"sl":11},{"sl":15}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [47, 456, 77], [47, 456, 77], [], [], [47, 456, 77], [47, 456, 77], [], [], []]
