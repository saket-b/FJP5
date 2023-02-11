#include<bits/stdc++.h>
using namespace std;

class Car{

    public:
    string model;
    string service_code;
    unordered_map<string, string>model_service;

    void set_model(string name)
    {
        model = name;
    }
    void set_service(string name)
    {
        service_code = name;
    }

    void set_map_value()
    {
        model_service.insert( {"BS01", "Basic Servicing"});
        model_service.insert({"EF01", "Engine Fixing"});
        model_service.insert({"CF01", "Clutch Fixing"});
        model_service.insert({"BF01", "Brake Fixing"});
        model_service.insert({"GF01", "Gear Fixing"});

    }


};

class Hatchback  {

    public :

    unordered_map<string, int> model_price;

    void set_value()
    {
        model_price.insert({"BS01", 2000});
        model_price.insert({"EF01", 5000});
        model_price.insert({"CF01", 2000});
        model_price.insert({"BF01", 1000});
        model_price.insert({"GF01", 3000});

    }

    void    total_calculate( vector<string>service_arr)
    {
        int sum =0;
        Car obj;
        obj.set_map_value();
        for( int i=0; i<service_arr.size(); i++)
        {    
            cout<<"Charges for "<<obj.model_service[service_arr[i]]<<" :\t"<<model_price[service_arr[i]]<<endl;
            sum+= model_price[service_arr[i]];
        }
        cout<<"Total Cost \t\t: \t"<<sum<<endl;
    }


};

class Sedan  {

    public :

    unordered_map<string, int> model_price;

    void set_value()
    {

        model_price.insert({"BS01", 4000});
        model_price.insert({"EF01", 8000});
        model_price.insert({"CF01", 4000});
        model_price.insert({"BF01", 1500});
        model_price.insert({"GF01", 6000});

    }
    void    total_calculate( vector<string>service_arr)
    {
        Car obj;
        obj.set_map_value();
        int sum =0;
       for( int i=0; i<service_arr.size(); i++)
        {    
            cout<<"Charges for "<<obj.model_service[service_arr[i]]<<" :\t"<<model_price[service_arr[i]]<<endl;
            sum+= model_price[service_arr[i]];
        }
        cout<<"Total cost \t\t: \t"<<sum<<endl;

    }


};

class SUV : public Car {

    public :

    unordered_map<string, int> model_price;

    void set_value()
    {
        model_price.insert({"BS01", 5000});
        model_price.insert({"EF01", 10000});
        model_price.insert({"CF01", 6000});
        model_price.insert({"BF01", 2500});
        model_price.insert({"GF01", 8000});

    }

    void     total_calculate( vector<string>service_arr)
    {
        Car obj;
        obj.set_map_value();
        int sum =0;
        for( int i=0; i<service_arr.size(); i++)
        {    
            cout<<"Charges for "<<obj.model_service[service_arr[i]]<<" :\t"<<model_price[service_arr[i]]<<endl;
            sum+= model_price[service_arr[i]];
        }
        cout<<"Total Cost  \t\t: \t"<<sum<<endl;
    }


};


int main()
{
    Car obj;

    vector<string>service_arr;
    obj.set_map_value();
   
    cout<<"Enter Type of Car : ";
    cin>>obj.model;


    do
    {
        cout<<"Enter Type of Service Code or E for Exit :";
        cin>>obj.service_code;
        for(int i=0; i<obj.service_code.size(); i++)
            obj.service_code[i] = toupper(obj.service_code[i]);

        service_arr.push_back(obj.service_code);

    }while( obj.service_code != "E");

    // This for E;
    service_arr.pop_back();

    if( obj.model == "Hatchback")
    {
        Hatchback obj1;
        obj1.set_value();
        obj1.total_calculate(service_arr);


    }
    else if( obj.model == "Sedan")
    {
        Sedan obj2;
        obj2.set_value();
        obj2.total_calculate(service_arr);
    }
    else if( obj.model == "SUV")
    {
        SUV obj3;
        obj3.set_value();
        obj3.total_calculate(service_arr);
    }
    else 
    {   
        cout<<"Model does not exist"<<endl;
    }


   
    return 0;
}
