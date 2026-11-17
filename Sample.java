class Sample{
int count;
public Sample(int value){
this.count=value; 
}
public static void main(String args[]){
int count2=0;
Sample obj=new Sample(60);
System.out.println("Hello World");
System.out.println("count="+obj.count);
System.out.println("count="+count2);
}
}