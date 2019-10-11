<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version = "1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:template match="/">
   <html>
   <body>
   <h2>Tariffs</h2>
   <table border="1">
     <tr bgcolor="#9acd32">
       <th>Name</th>
       <th>Operator</th>
       <th>Payroll</th>
       <th>Call prices</th>
       <th>SMS price</th>
       <th>Parameters</th>
     </tr>
     <xsl:for-each select="tariffs/tariff">
     <xsl:sort select="payroll"/>
     <tr>
       <td><xsl:value-of select="name"/></td>
       <td><xsl:value-of select="operator"/></td>
       <td><xsl:value-of select="payroll"/></td>
     <td>
         <ul>
             <li><span>inside</span><xsl:value-of select="callPrices/inside "/></li>
             <li><span>outside</span><xsl:value-of select="callPrices/outside "/></li>
             <li><span>stac</span><xsl:value-of select="callPrices/stac "/></li>
         </ul>
    </td>

     <td><xsl:value-of select="smsPrice"/></td>
    <td><xsl:value-of select="parameters"/></td>
     </tr>
     </xsl:for-each>
   </table>
   </body>
   </html>
</xsl:template>


</xsl:stylesheet>