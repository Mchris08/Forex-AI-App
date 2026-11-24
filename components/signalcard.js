import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/config';

export default function SignalCard({ signal, onTrade }) {
  return (
      <View style={styles.card}>
            <View style={styles.header}>
                    <View style={[styles.badge, signal.signal === 'BUY' ? styles.buyBadge : styles.sellBadge]}>
                              <Text style={styles.badgeText}>{signal.signal}</Text>
                                      </View>
                                              <Text style={styles.symbol}>{signal.symbol}</Text>
                                                      <Text style={styles.confidence}>{(signal.confidence * 100).toFixed(0)}%</Text>
                                                            </View>
                                                                  <View style={styles.details}>
                                                                          <View style={styles.row}><Text style={styles.label}>Strategy:</Text><Text style={styles.val}>{signal.strategy}</Text></View>
                                                                                  <View style={styles.row}><Text style={styles.label}>Entry:</Text><Text style={styles.val}>{signal.entry_price?.toFixed(5)}</Text></View>
                                                                                          <View style={styles.row}>
                                                                                                    <Text style={styles.label}>SL / TP:</Text>
                                                                                                              <Text style={styles.val}><Text style={{color: COLORS.sell}}>{signal.stop_loss?.toFixed(5)}</Text> / <Text style={{color: COLORS.buy}}>{signal.take_profit?.toFixed(5)}</Text></Text>
                                                                                                                      </View>
                                                                                                                            </View>
                                                                                                                                  <View style={styles.reasoningBox}><Text style={styles.reasoning}>{signal.reasoning}</Text></View>
                                                                                                                                        <TouchableOpacity style={[styles.tradeBtn, signal.signal === 'BUY' ? styles.buyBtn : styles.sellBtn]} onPress={() => onTrade(signal)}>
                                                                                                                                                <Text style={styles.tradeBtnText}>TRADE {signal.signal}</Text>
                                                                                                                                                      </TouchableOpacity>
                                                                                                                                                          </View>
                                                                                                                                                            );
                                                                                                                                                            }

                                                                                                                                                            const styles = StyleSheet.create({
                                                                                                                                                              card: { backgroundColor: COLORS.card, padding: 16, borderRadius: 12, marginBottom: 12 },
                                                                                                                                                                header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
                                                                                                                                                                  badge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6, marginRight: 8 },
                                                                                                                                                                    buyBadge: { backgroundColor: 'rgba(34, 197, 94, 0.2)' },
                                                                                                                                                                      sellBadge: { backgroundColor: 'rgba(239, 68, 68, 0.2)' },
                                                                                                                                                                        badgeText: { color: COLORS.text, fontWeight: 'bold', fontSize: 12 },
                                                                                                                                                                          symbol: { fontSize: 18, fontWeight: 'bold', color: COLORS.text, flex: 1 },
                                                                                                                                                                            confidence: { fontSize: 16, fontWeight: '600', color: COLORS.accent },
                                                                                                                                                                              details: { marginBottom: 12 },
                                                                                                                                                                                row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
                                                                                                                                                                                  label: { color: COLORS.textSec, fontSize: 14 },
                                                                                                                                                                                    val: { color: COLORS.text, fontSize: 14, fontWeight: '500' },
                                                                                                                                                                                      reasoningBox: { backgroundColor: COLORS.bg, padding: 12, borderRadius: 8, marginBottom: 12 },
                                                                                                                                                                                        reasoning: { color: COLORS.textSec, fontSize: 13, lineHeight: 18 },
                                                                                                                                                                                          tradeBtn: { padding: 14, borderRadius: 8, alignItems: 'center' },
                                                                                                                                                                                            buyBtn: { backgroundColor: COLORS.buy },
                                                                                                                                                                                              sellBtn: { backgroundColor: COLORS.sell },
                                                                                                                                                                                                tradeBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
                                                                                                                                                                                                });