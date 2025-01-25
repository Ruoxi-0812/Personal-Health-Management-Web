package cn.kmbeast.aop;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Interface protection annotation.
 * Only users with valid identities can access the specific interface functionality.
 */
@Target({ElementType.PARAMETER, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface Protector {

    /**
     * Role name
     *
     * @return String
     */
    String role() default "";
}
