import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/config';

export default function AccountCard({ info, onCloseAll }) {
  if (!info) {
      return (
            <View style={styles.card}>
                    <Text style={styles.title}>⚠️ MT5 Not Connected</Text>
                            <Text style={styles.sub}>Check MT5_ACCOUNT_ID in Vercel env vars</Text>
                                  </View>
                                      );
                                        }
                                          return (
                                              <View style={styles.card}>
                                                    <View style={styles.header}>
                                                            <Text style={styles.title}>💰 Live Account</Text>
                                                                    <TouchableOpacity style={styles.emergencyBtn} onPress={onCloseAll}>
                                                                              <Text style={styles.emergencyText}>STOP ALL</Text>
                                                                                      </TouchableOpacity>
                                                                                            </View>
                                                                                                  <View style={styles.stats}>
                                                                                                          <View style={styles.stat}><Text style={styles.label}>Balance</Text><Text style={styles.value}>${info.balance?.toFixed(2)}</Text></View>
                                                                                                                  <View style={styles.stat}><Text style={styles.label}>Equity</Text><Text style={styles.value}>${info.equity?.toFixed(2)}</Text></View>
                                                                                                                          <View style={styles.stat}>
                                                                                                                                    <Text style={styles.label}>P/L</Text>
                                                                                                                                              <Text style={[styles.value, { color: info.profit >= 0 ? COLORS.buy : COLORS.sell }]}>${info.profit?.toFixed(2)}</Text>
                                                                                                                                                      </View>
                                                                                                                                                              <View style={styles.stat}><Text style={styles.label}>Open</Text><Text style={styles.value}>{info.open_positions}</Text></View>
                                                                                                                                                                    </View>
                                                                                                                                                                        </View>
                                                                                                                                                                          );
                                                                                                                                                                          }

                                                                                                                                                                          const styles = StyleSheet.create({
                                                                                                                                                                            card: { backgroundColor: COLORS.card, margin: 16, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#334155' },
                                                                                                                                                                              header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
                                                                                                                                                                                title: { fontSize: 16, fontWeight: '600', color: COLORS.text },
                                                                                                                                                                                  emergencyBtn: { backgroundColor: COLORS.sell, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
                                                                                                                                                                                    emergencyText: { color: 'white', fontWeight: 'bold', fontSize: 12 },
                                                                                                                                                                                      stats: { flexDirection: 'row', flexWrap: 'wrap' },
                                                                                                                                                                                        stat: { width: '50%', paddingVertical: 8 },
                                                                                                                                                                                          label: { color: COLORS.textSec, fontSize: 12 },
                                                                                                                                                                                            value: { color: COLORS.text, fontSize: 18, fontWeight: 'bold', marginTop: 4 },
                                                                                                                                                                                              sub: { color: COLORS.textSec, marginTop: 8, fontSize: 12 }
                                                                                                                                                                                              });