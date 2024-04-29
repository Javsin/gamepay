'use client'

import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    sectionBetween: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        textDecoration: 'underline',
    },
    content: {
        fontSize: 16,
        marginBottom: 10,
    },
    contentLarge: {
        fontSize: 20,
        marginBottom: 10,
    },
    textSmall: {
        fontSize: 14,
        marginBottom: 5,
    },
    separator: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
});

interface InvoiceData {
    orderNumber: string;
    productName: string;
    productQuantity: number;
    productPrice: number;
    totalAmount: number;
    nickname: string;
    userId: string;
    server: string;
    paymentMethod: string;
}

const generatePDF = async (data: InvoiceData) => {
    const doc = (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.header}>Invoice</Text>
                    <Text style={styles.contentLarge}>Harap Lengkapi Pembayaran</Text>
                    <Text style={[styles.textSmall, {color: "gray"}]}>Pesanan kamu {data.orderNumber} menunggu pembayaran</Text>
                    <View style={{ marginBottom: 20 }} />
                    <View style={styles.separator} />
                    <View style={{ marginBottom: 10 }} />
                    <Text style={styles.textSmall}>{data.productName}</Text>
                    <Text style={[styles.textSmall, {color: "gray"}]}>{data.productQuantity} (367 + 41) Diamonds</Text>
                    <View style={{ marginBottom: 20 }} />
                    <Text style={styles.textSmall}>Nickname: {data.nickname}</Text>
                    <Text style={styles.textSmall}>ID: {data.userId}</Text>
                    <Text style={styles.textSmall}>Server: {data.server}</Text>
                    <View style={{ marginBottom: 20 }} />
                    {/* <View style={styles.separator} /> */}
                    <Text style={[styles.content, {color: "gray"}]}>Rincian Pembayaran</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.textSmall, {color: "gray"}]}>Total Pembayaran</Text>
                        <Text style={styles.textSmall}>Rp. {data.totalAmount}</Text>
                    </View>
                    <View style={{ marginBottom: 20 }} />
                    <Text style={styles.content}>Metode Pembayaran</Text>
                    <Text style={[styles.content, {color: "gray"}]}>{data.paymentMethod}</Text>
                    <View style={{ marginBottom: 20 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textSmall}>Nomor Invoice</Text>
                        <Text style={styles.textSmall}>TP090909099</Text>
                    </View>
                    <View style={{ marginBottom: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textSmall}>Status Transaksi</Text>
                        <Text style={styles.textSmall}>Pending</Text>
                    </View> 
                    <View style={{ marginBottom: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textSmall}>Status Pembayaran</Text>
                        <Text style={styles.textSmall}>Unpaid</Text>
                    </View>
                    <View style={{ marginBottom: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textSmall}>Pesan</Text>
                        <Text style={styles.textSmall}>Menunggu Pembayaran</Text>
                    </View>
                    <View style={{ marginBottom: 20 }} />
                    <View style={styles.separator} />
                    <View style={{ marginBottom: 20 }} />
                    <Text style={[styles.contentLarge, {textAlign: "center"}]}>MURA GAMES</Text>
                </View>
            </Page>
        </Document>
    );

    const pdfBlob = await pdf(doc).toBlob();
    const fileURL = URL.createObjectURL(pdfBlob);
    window.open(fileURL);
    // window.print();
    // saveAs(pdfBlob, 'invoice.pdf');
};


export default generatePDF;