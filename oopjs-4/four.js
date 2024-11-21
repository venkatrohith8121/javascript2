class parent {
    m1() {
        console.log("parent class")
    }
}
class child1 extends parent{
    m2() {
        console.log("child 1 class")
    }
}
class child2 extends parent{
    m3() {
        console.log("child 2 class")
    }
}
a1=new child1()
a2=new child2()
a1.m1()
a2.m1()