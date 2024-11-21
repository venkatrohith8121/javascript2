// multilevel inhertance
class grandparent {
    m1() {
        console.log("grand parent")
    }
}
class parent extends grandparent {
    m2() {

        console.log("parent")
    }
}
class child extends parent {
    m3() {
        console.log("child")
    }
}
let a1 = new child()
a1.m1()
a1.m2()
a1.m3()