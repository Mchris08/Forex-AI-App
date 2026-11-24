import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { analyzeChart } from '../services/api';
import { COLORS } from '../constants/config';

export default function AIAnalyzerScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
      const [symbol, setSymbol] = useState('EURUSD');
        const [timeframe, setTimeframe] = useState('H1');

          const pickAndAnalyze = async () => {
              const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                  if (status !== 'granted') {
                        Alert.alert('Permission needed', 'Allow photo access to analyze charts');
                              return;
                                  }
                                      const res = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.8, base64: true });
                                          if (!res.canceled) {
                                                setLoading(true);
                                                      try {
                                                              const data = await analyzeChart(symbol, timeframe, res.assets[0].base64);
                                                                      if (data.detail) {
                                                                                Alert.alert('Error', data.detail);
                                                                                        } else {
                                                                                                  setResult(data);
                                                                                                          }
                                                                                                                } catch (e) {
                                                                                                                        Alert.alert('Error', e.message);
                                                                                                                              } finally {
                                                                                                                                      setLoading(false);
                                                                                                                                            }
                                                                                                                                                }
                                                                                                                                                  };

                                                                                                                                                    return (
                                                                                                                                                        <ScrollView style={styles.container}>
                                                                                                                                                              <View style={styles.header}>
                                                                                                                                                                      <Text style={styles.title}>🤖 AI Chart Analyzer</Text>
                                                                                                                                                                            </View>
                                                                                                                                                                                  
                                                                                                                                                                                        <View style={styles.section}>
                                                                                                                                                                                                <Text style={styles.label}>Symbol:</Text>
                                                                                                                                                                                                        <View style={styles.row}>
                                                                                                                                                                                                                  {['EURUSD', 'GBPUSD', 'XAUUSD'].map(s => (
                                                                                                                                                                                                                              <TouchableOpacity key={s} style={[styles.chip, symbol === s && styles.chipActive]} onPress={() => setSymbol(s)}>
                                                                                                                                                                                                                                            <Text style={[styles.chipText, symbol === s && styles.chipTextActive]}>{s}</Text>
                                                                                                                                                                                                                                                        </TouchableOpacity>
                                                                                                                                                                                                                                                                  ))}
                                                                                                                                                                                                                                                                          </View>
                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                          <Text style={styles.label}>Timeframe:</Text>
                                                                                                                                                                                                                                                                                                  <View style={styles.row}>
                                                                                                                                                                                                                                                                                                            {['M15', 'H1', 'H4'].map(t => (
                                                                                                                                                                                                                                                                                                                        <TouchableOpacity key={t} style={[styles.chip, timeframe === t && styles.chipActive]} onPress={() => setTimeframe(t)}>
                                                                                                                                                                                                                                                                                                                                      <Text style={[styles.chipText, timeframe === t && styles.chipTextActive]}>{t}</Text>
                                                                                                                                                                                                                                                                                                                                                  </TouchableOpacity>
                                                                                                                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                                                                                                                    </View>

                                                                                                                                                                                                                                                                                                                                                                            <TouchableOpacity style={styles.btn} onPress={pickAndAnalyze} disabled={loading}>
                                                                                                                                                                                                                                                                                                                                                                                      <Text style={styles.btnText}>{loading ? 'Analyzing...' : '📸 Upload Chart Screenshot'}</Text>
                                                                                                                                                                                                                                                                                                                                                                                              </TouchableOpacity>
                                                                                                                                                                                                                                                                                                                                                                                                    </View>

                                                                                                                                                                                                                                                                                                                                                                                                          {loading && <ActivityIndicator size