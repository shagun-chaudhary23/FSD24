class Student{
   int Roll;
   String Name;
   String Branch;
   String College;
   public Student(int r ,String N , String B,String C){
       Roll=r;
       Name=N;
       Branch=B;
       College=C;
   }
   void display(){
       System.out.println("Roll No="+Roll);
       System.out.println("Name="+Name);
       System.out.println("Branch="+Branch);
       System.out.println("College="+College);
   }
   public static void main(String args[]){
       Student s1=new Student(1019,"Shagun","CSE","ABESEC");
       s1.display();
   }
 
}

