package cn.kmbeast.utils;


import io.jsonwebtoken.*;

import java.util.Date;
import java.util.UUID;

/**
 * jwt token tool class
 */
public class JwtUtil {

    private static final String privateKey = "d8c986df-8512-42b5-906f-eeea9b3acf86";

    private static final Integer time = 1000 * 60 * 60 * 24 * 7;


    public static String toToken(Integer id, Integer role) {
        JwtBuilder jwtBuilder = Jwts.builder();
        return jwtBuilder.setHeaderParam("typ", "JWT")
                .setHeaderParam("alg", "HS256")
                .claim("id", id)
                .claim("role", role)
                .setSubject("Authentification of user")
                .setExpiration(new Date(System.currentTimeMillis() + time))
                .setId(UUID.randomUUID().toString())
                .signWith(SignatureAlgorithm.HS256, privateKey)
                .compact();
    }

    /**
     * Decrypt TOKEN
     */
    public static Claims fromToken(String token) {
        JwtParser jwtParser = Jwts.parser();
        Jws<Claims> claimsJws;
        try {
            claimsJws = jwtParser.setSigningKey(privateKey).parseClaimsJws(token);
            return claimsJws.getBody();
        } catch (Exception e) {
            return null;
        }
    }

}
