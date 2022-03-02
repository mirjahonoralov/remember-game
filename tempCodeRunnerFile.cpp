#include <iostream>
#include <set>
#include <iterator>
using namespace std;
int main(){
 
 set <int> st;
 for(int i=1; i<10; i++)
  st.insert(i%4);
 for(auto it: st)
  cout << st << " ";
 
 return 0;
}