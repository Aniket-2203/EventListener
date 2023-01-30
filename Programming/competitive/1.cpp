#include <bits/stdc++.h>
using namespace std;
class Solution {
  public:
    vector<int> printMissingIntervals(int arr[], int n) {
        // code here
        vector<int>v;
        
         if(arr[0]==1)
        {
              v.push_back(0);
              v.push_back(0);
        }
        else if(arr[0]>1)
        {
            v.push_back(0);
            v.push_back(arr[0]-1);
        }
        for(int i=1;i<n;i++)
        {
            if(arr[i]-arr[i-1]>1)
            {
                v.push_back(arr[i-1]+1);
                v.push_back(arr[i]-1);
            }
        }
        v.push_back(arr[n-1]+1);
        v.push_back(99999);
        return v;
    }
};