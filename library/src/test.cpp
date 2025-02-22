#include <bits/stdc++.h>
#include <sstream>

using namespace std;
vector<string> splitString(const std::string& str, char delimiter) {
    vector<string> tokens;
    string token;
    istringstream tokenStream(str);
    while (getline(tokenStream, token, delimiter)) {
        tokens.push_back(token);
    }
    return tokens;
}

int main() {
    string input;

    cout << "Enter the first string of Numbers ";
    getline(cin, input);
    vector<string> firstList = splitString(input, ',');
    cout << "Enter the second string of Numbers ";
    getline(cin, input);
    vector<string> secondList = splitString(input, ',');


    cout << "Numbers Appeared in the First List and not on the Second one : " << endl;
    bool flag=0;
    for( string s1:firstList)
    {
        flag = 0;
        for(string s2:secondList)
        {
            if(s1==s2){flag=1;break;}
        }
        if(!flag)
        {
            cout<<s1<<"\n";
        }
    }


    return 0;
}
