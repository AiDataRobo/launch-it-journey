
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, MapPin, ArrowRight, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const salaryData = [
  { name: 'Entry', developer: 75, dataScientist: 85, security: 80 },
  { name: 'Mid', developer: 110, dataScientist: 120, security: 115 },
  { name: 'Senior', developer: 145, dataScientist: 160, security: 150 },
  { name: 'Expert', developer: 175, dataScientist: 190, security: 180 },
];

const growthData = [
  { name: '2022', jobs: 120 },
  { name: '2023', jobs: 180 },
  { name: '2024', jobs: 250 },
  { name: '2025', jobs: 340 },
  { name: '2026', jobs: 430 },
];

const demandData = [
  { name: 'Frontend', value: 22 },
  { name: 'Backend', value: 28 },
  { name: 'Full Stack', value: 32 },
  { name: 'DevOps', value: 18 },
  { name: 'Data', value: 25 },
  { name: 'Security', value: 20 },
];

const locationData = [
  { city: 'San Francisco', growth: '+15%', avgSalary: '$145K', hotRoles: 'ML Engineer, Full Stack' },
  { city: 'New York', growth: '+12%', avgSalary: '$135K', hotRoles: 'Security Analyst, Frontend' },
  { city: 'Austin', growth: '+22%', avgSalary: '$120K', hotRoles: 'DevOps, React Developer' },
  { city: 'Seattle', growth: '+18%', avgSalary: '$140K', hotRoles: 'Cloud Architect, Data Engineer' },
];

const JobMarketInsights = () => {
  return (
    <section id="job-market-insights" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-50/80"></div>
        <motion.div 
          className="absolute top-1/4 right-0 w-72 h-72 bg-jobonboard-blue/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-0 w-72 h-72 bg-jobonboard-purple/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -10, 0],
            y: [0, -15, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-blue/10 text-jobonboard-blue text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Market Trends</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Job Market Insights
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed with data-driven insights on job demand, salary expectations, and industry trends.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Salary Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-jobonboard-green" />
                    Salary Comparison by Experience (in $K)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={salaryData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area 
                          type="monotone" 
                          dataKey="developer" 
                          name="Software Developer"
                          stackId="1"
                          stroke="#0EA5E9" 
                          fill="#0EA5E9" 
                          fillOpacity={0.6} 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="dataScientist" 
                          name="Data Scientist"
                          stackId="2"
                          stroke="#8B5CF6" 
                          fill="#8B5CF6" 
                          fillOpacity={0.6} 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="security" 
                          name="Security Specialist"
                          stackId="3"
                          stroke="#10B981" 
                          fill="#10B981" 
                          fillOpacity={0.6} 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-jobonboard-purple" />
                    IT Jobs Growth Forecast
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={growthData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area 
                          type="monotone" 
                          dataKey="jobs" 
                          name="Jobs (thousands)"
                          stroke="#8B5CF6" 
                          fill="url(#colorJobs)" 
                          fillOpacity={0.8} 
                        />
                        <defs>
                          <linearGradient id="colorJobs" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.2}/>
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Secondary Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-jobonboard-blue" />
                    Demand by Specialization (%)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={demandData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        barSize={36}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar 
                          dataKey="value" 
                          name="Market Share (%)"
                          fill="#0EA5E9" 
                          radius={[4, 4, 0, 0]}
                        />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-jobonboard-green" />
                    Top IT Job Markets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Growth</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Avg. Salary</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Hot Roles</th>
                        </tr>
                      </thead>
                      <tbody>
                        {locationData.map((location, index) => (
                          <tr key={location.city} className={index !== locationData.length - 1 ? "border-b border-gray-100" : ""}>
                            <td className="py-3 px-4 font-medium">{location.city}</td>
                            <td className="py-3 px-4 text-jobonboard-green">{location.growth}</td>
                            <td className="py-3 px-4">{location.avgSalary}</td>
                            <td className="py-3 px-4 text-gray-600">{location.hotRoles}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button 
              className="bg-jobonboard-blue hover:bg-jobonboard-blue-light text-white"
            >
              Explore Full Market Report
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JobMarketInsights;
